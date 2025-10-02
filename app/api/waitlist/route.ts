import { NextRequest, NextResponse } from 'next/server';

// Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6rMN9DdhKhTN99G4l9rX3vutPMWGeCtcKrfr6ae6YoLxBVxHrWnld-lj-ZkHVgswYnQ/exec';

interface WaitlistData {
  name: string;
  email: string;
  phone: string;
}

// Validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  // Allow international phone numbers with optional + and spaces/dashes
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone.trim());
};

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export async function POST(request: NextRequest) {
  try {
    // Add debugging
    console.log('API route called');
    console.log('Request headers:', Object.fromEntries(request.headers.entries()));
    
    // Parse request body
    const body: WaitlistData = await request.json();
    console.log('Received body:', body);
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      console.log('Validation failed - missing fields:', { name: !!body.name, email: !!body.email, phone: !!body.phone });
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone)
    };

    // Validate email format
    if (!isValidEmail(sanitizedData.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(sanitizedData.phone)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Log the data being sent
    console.log('Sending to Google Apps Script:', sanitizedData);
    console.log('JSON data:', JSON.stringify(sanitizedData));
    
    // Make request to Google Apps Script with JSON data
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    console.log('Google Apps Script response status:', response.status);
    console.log('Google Apps Script response headers:', Object.fromEntries(response.headers.entries()));

    // Get response text first
    const responseText = await response.text();
    console.log('Google Apps Script raw response:', responseText);

    // Check if the request was successful
    if (!response.ok) {
      console.error('Google Apps Script error:', response.status, response.statusText);
      return NextResponse.json(
        { success: false, message: `Google Apps Script error: ${responseText}` },
        { status: 500 }
      );
    }

    // Try to parse response
    let result;
    try {
      result = JSON.parse(responseText);
      console.log('Parsed Google Apps Script response:', result);
    } catch (parseError) {
      console.error('Error parsing Google Apps Script response:', parseError);
      console.log('Response was not JSON, treating as success');
      // If we can't parse the response but the request was successful,
      // assume it worked (Google Apps Script sometimes returns HTML)
      return NextResponse.json({
        success: true,
        message: 'Thank you for joining our waitlist! We\'ll be in touch soon.'
      });
    }

    // Handle Google Apps Script response
    if (result.success || result.status === 'success') {
      return NextResponse.json({
        success: true,
        message: result.message || 'Thank you for joining our waitlist! We\'ll be in touch soon.'
      });
    } else {
      console.error('Google Apps Script returned error:', result);
      return NextResponse.json(
        { success: false, message: result.message || result.error || 'Failed to submit data' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
