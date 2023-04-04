/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */

function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  let form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  let params = {'client_id': '247786976706-tuadil9n38td0t00pi0r1vici6291jbr.apps.googleusercontent.com',
                'redirect_uri': 'http://localhost:8080/development/routes/authentication/authentication.html',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/userinfo.profile',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (let p in params) {
    let input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

document.getElementById("google-signin").addEventListener("click", oauthSignIn)