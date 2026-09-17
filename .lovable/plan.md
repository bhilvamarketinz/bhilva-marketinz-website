# Contact Form EmailJS Test Mode

## Goal
Add an optional test mode to the contact form so a real EmailJS submission can be inspected and its delivery result confirmed without opening developer tools.

## Changes
- Add a clearly labeled test-mode toggle to the contact form.
- When enabled, show the exact EmailJS payload that will be sent, updating from the entered form values.
- Submit through the existing EmailJS integration as usual.
- Show an in-form delivery log with sending, success, or failure status and the EmailJS response/error summary.
- Keep normal form behavior unchanged when test mode is off, including success notices and WhatsApp fallback on failure.
- Avoid retaining test payloads after leaving or refreshing the page.

## Validation
- Submit once in test mode and confirm EmailJS returns success.
- Verify the visible payload matches the sent fields.
- Check the form at desktop and mobile widths and confirm no browser errors.

## Technical details
The payload and delivery log remain client-side in React state. Public EmailJS identifiers are unchanged, and no additional storage or backend is introduced.
