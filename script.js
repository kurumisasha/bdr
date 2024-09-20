document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const voucherDetails = document.getElementById('voucherDetails');

    generateButton.addEventListener('click', function() {
        const cardNumber = document.getElementById('cardNumber').value;
        if (cardNumber) {
            fetchVoucherDetails(cardNumber);
        } else {
            voucherDetails.innerHTML = '<p>Please enter a card number.</p>';
        }
    });

    function fetchVoucherDetails(cardNumber) {
        const url = `https://api.teeg.cloud/vouchers/campaigns/89FZ1OP/cards/${cardNumber}?tz=RBDXDGI8YV`;
        const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzIzNTI1MjUxLCJuYmYiOjE3MjM1MjQzNTEsImlwQWRkcmVzcyI6IjE4Mi4xLjcxLjEwMyIsIm9pZCI6IjIyNGQ1OWY2LTBmYTEtNDM2Zi05NmI1LWZhNWQ5NjVhNzNhYyIsInN1YiI6IjIyNGQ1OWY2LTBmYTEtNDM2Zi05NmI1LWZhNWQ5NjVhNzNhYyIsInBob25lIjoiKzYyODUxNTUxMDA5MzQiLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6ImNiZDk3Y2M1LTVmZjItNDA5Mi1hMjI2LTYzYWUwYTUxMzUzYSIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzIzNTI0MzUxfQ.pbM9-og405HltDXbxHSVa3_DhMllydeygSQmBreXOhrtbj0dn-du-SU2-RNR_n0gsmY08ckwLiwjr3QklfTYFswxJhC5YGpW_1oOSwfQs-ZXiQAFzilj-Md-mn9FvRuYelEFCBVWnG1LKGuT9wnCHRifCXVl2JHhDCHc6gCQE1v5IpMn452l3yxkGgr_eKe41uHlgqVYEcwpoJlre2UYnAai_JArrPqtxdOy7FlzmspLcC92HwfqyVRUgLVIg5gik81tssTl03_ZysG0VVAmHDQub0n-A0cNyO-8iTCzYAG97V8Hb4iarWQbtbuCJvw1BLKDspNHRr5ekB62EDT1AQ';

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': accessToken,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Display voucher details
            voucherDetails.innerHTML = `
                <p><strong>Voucher Code:</strong> ${data.voucher_code}</p>
                <p><strong>Amount:</strong> ${data.amount}</p>
                <p><strong>Expiry Date:</strong> ${data.expiry_date}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching voucher details:', error);
            voucherDetails.innerHTML = '<p>Failed to fetch voucher details.</p>';
        });
    }
});
