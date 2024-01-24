document.querySelector('#shareButton').addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const shareButton = event.target;
        const title = shareButton.getAttribute('data-title');
        const description = shareButton.getAttribute('data-description');
        const url = window.location.href;

        if (navigator.share) {
            await navigator.share({
                title: title,
                text: description,
                url: url,
            });
            alert('Shared successfully');
        } else {
            navigator.clipboard.writeText(url);
            alert('URL copied to clipboard');
        }
    } catch (err) {
        console.error('Error: ' + err);
    }
});