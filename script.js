function copyCode(button) {
    const codeBlock = button.previousElementSibling;
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#27ae60';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#6c5ce7';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        button.textContent = 'Failed to copy';
        button.style.background = '#e74c3c';
    });
}