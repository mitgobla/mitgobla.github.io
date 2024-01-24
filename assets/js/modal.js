document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.card-body img');
    images.forEach((img, index) => {
        // Add data attributes to the image
        img.setAttribute('data-bs-toggle', 'modal');
        img.setAttribute('data-bs-target', `#imageModal${index}`);

        // Create the modal
        const modal = document.createElement('div');
        modal.classList.add('modal', 'fade');
        modal.id = `imageModal${index}`;
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="text-end">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex justify-content-center align-items-center">
                        <img src="${img.src}" class="img-fluid">
                        </div>
                    <div class="text-center mt-3">${img.alt}</div>
                </div>
            </div>
        `;

        // Append the modal to the body
        document.body.appendChild(modal);
    });
});