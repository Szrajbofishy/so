document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const messageDiv = document.getElementById('message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const feedback = document.getElementById('feedback').value.trim();
        
        if (validateForm(name, email, feedback)) {
            submitFeedback(name, email, feedback);
        }
    });
    
    function validateForm(name, email, feedback) {
        if (!name || !email || !feedback) {
            showMessage('Please fill in all fields.', 'error');
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return false;
        }
        
        return true;
    }
    
    function submitFeedback(name, email, feedback) {
        console.log('Feedback submitted:', { name, email, feedback });
        
        showMessage('Thank you for your feedback! We appreciate your input.', 'success');
        
        form.reset();
        
        setTimeout(() => {
            hideMessage();
        }, 5000);
    }
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
    }
    
    function hideMessage() {
        messageDiv.className = 'message hidden';
    }
});
