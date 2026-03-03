<?php
header('Content-Type: application/json');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Sanitize inputs
function clean(string $value): string {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

$firstName = clean($_POST['firstName'] ?? '');
$lastName  = clean($_POST['lastName']  ?? '');
$email     = clean($_POST['email']     ?? '');
$phone     = clean($_POST['phone']     ?? '');
$message   = clean($_POST['message']   ?? '');

// Validate required fields
if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Honeypot check — bots fill hidden fields humans leave empty
$botField = $_POST['bot-field'] ?? '';
if (!empty($botField)) {
    // Silently appear to succeed so bots move on
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

$to      = 'info@amice.co.uk';
$subject = "New enquiry from {$firstName} {$lastName} — Amice Website";

$body  = "You have received a new contact form submission:\n\n";
$body .= "Name:    {$firstName} {$lastName}\n";
$body .= "Email:   {$email}\n";
$body .= "Phone:   {$phone}\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: noreply@amice.co.uk\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent']);
}
