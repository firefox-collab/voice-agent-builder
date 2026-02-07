export async function POST(request) {
  try {
    const body = await request.json();

    console.log('Form submission received:', body);

    return Response.json({
      success: true,
      message: 'Form submitted successfully',
      data: body
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
