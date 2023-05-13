// Event listener to submit button
const submitBtn = document.getElementById('submit-btn');
const textarea = document.getElementById('myTextarea');
const languageSelect = document.getElementById("language-select");
let selectedLg;

submitBtn.addEventListener('click', () => {
    const data = {
      script: textarea.value,
      lang: selectedLg,
    };
    console.log(data);
  
    fetch('http:127.0.0.1:3000/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log(response);
      //print response to the textarea
      //textarea.value = response;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Event listener to test button
const testBtn = document.getElementById('test-btn');

testBtn.addEventListener('click', () => {
    const data = {
      script: textarea.value,
      lang: selectedLg,
    };
    console.log(data);
  
    fetch('http:127.0.0.1:3000/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log(response);
      //print response to the textarea
      //textarea.value = response;
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
          textarea.value = `var twoSum = function(num1, num2, target) {
                  
            }`
        break;
      case 'c++':
          textarea.value = `class Solution {
        public:
            bool twoSum(int num1, int num2, int target) {
  
            }
        }`
        break;
      case 'python':
          textarea.value = `class Solution:
        def twoSum(num1, num2, target):
            pass`
        break;
      case 'java':
          textarea.value = `class Solution {
        public boolean twoSum(int num1, int num2, int target) {
      
            }
        }`
        break;
      default: textarea.value = `var twoSum = function(num1, num2, target) {
                  
      }`
    }
});
