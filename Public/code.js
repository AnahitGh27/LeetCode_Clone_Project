// Event listener to submit button
const submitBtn = document.getElementById('submit-btn');
const textarea = document.getElementById('myTextarea');
const languageSelect = document.getElementById("language-select");
let selectedLg;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
      script: textarea.value,
      lang: selectedLg,
    };
    console.log(data);
  
    fetch('http://localhost:3000/api/submit', {
      method: 'POST',
      mode: 'no-cors',
      // headers: {
      //   'Content-Type': 'application/json',
      //   //'Access-Control-Allow-Origin': '*'
      // },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log(response);
      response.json();
      //print response to the textarea
      //textarea.value = response.json();
    })
    .then(result => {
      console.log(result); // This will log the response
      textarea.value = result;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Event listener to test button
const testBtn = document.getElementById('test-btn');

testBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
      script: textarea.value,
      lang: selectedLg,
    };
    console.log(data);
    
    fetch('http://localhost:3000/api/test', {
      method: 'POST',
      mode: 'no-cors',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*'
      // },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log(response);
      //print response to the textarea
      //textarea.value = response;
    })
    .then(result => {
      console.log(result); // This will log the response
      // Update textarea value with the response
      textarea.value = result;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    selectedLg = this.value;
    switch (selectedLanguage) {
      case 'javascript':
          textarea.value = `var twoSum = function(num1, num2, target) { \n \n}`
        break;
      case 'c++':
          textarea.value = `class Solution {\n  public:\n   bool twoSum(int num1, int num2, int target) {\n\n  }\n};`
        break;
      case 'python':
          textarea.value = `class Solution:
        def twoSum(num1, num2, target):
        `
        break;
      case 'java':
          textarea.value = `class Solution {\n  public boolean twoSum(int num1, int num2, int target) {\n\n  }\n}`
        break;
      default: textarea.value = `var twoSum = function(num1, num2, target) {\n}`
    }
});
