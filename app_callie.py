from flask import Flask, render_template, request

app = Flask(__name__)

# Route for the homepage
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle form submission
@app.route('/request-demo', methods=['POST'])
def request_demo():
    email = request.form['email']  # Access the email input
    # Handle form data (e.g., store email, send email, etc.)
    print(f"Email received: {email}")
    return "Form submitted successfully!"  # You can return a new template or JSON response here.

if __name__ == '__main__':
    app.run(debug=True)
