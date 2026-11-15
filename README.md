# PETARUNG — Student Registration Demo

Modern frontend exercise for student registration, tuition estimation, and a printable summary.

## Features

- Responsive registration workspace and live cost summary
- Faculty / major selector, student profile and form validation
- Semester estimation: **SKS × biaya per SKS + DPP + SPP**
- Printable summary with print-to-PDF support
- Local-only demo sign-in and registration

## Run locally

Serve the project with any static server, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000`. No dependencies or database are required.

## Preview

Open [preview.html](preview.html) for a static, anonymized sample of the registration workspace.

## Security and limitations

Authentication is a local-browser **demo**, not a real login solution. Although plaintext password storage was replaced with a browser-side digest, local storage and JavaScript can be modified by the device owner. **Never use a real password or real student records here.** Production requires a server-side identity provider and proper authorization.

Fee amounts are illustrative; this is **not an official university invoice**, tuition quote, or proof of payment.

## Structure

- `index.html` — demo login and registration
- `home.html` — student form and cost estimation
- `invoice.html` — printable summary
- `preview.html` — noninteractive visual preview
- `scripts/` — local frontend behavior
- `style/` — responsive styling

## Author

Tri Puji Antoro · NIM 221011402646
