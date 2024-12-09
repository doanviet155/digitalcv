'use strict';

// Check Email to show information
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var form = document.getElementById('form');
form.addEventListener('submit', function (emailCheck) {
  emailCheck.preventDefault(); // prevents the form from Auto Submit
  var email = document.getElementById('email').value;
  console.log(email);

  if (email == '') {
    alert('Vui lòng phải nhập email');
    return false;
  }

  if (email.match(regex)) {
    document.getElementById('info').classList.remove('hide') &
      document.getElementById('form').classList.add('hide');
  } else {
    alert('Vui lòng nhập đúng định dạng');
  }
});

// ====== Show & OFF ========== EXPERIENCE ========= //
const vExperience = document.getElementById('experience').classList;
const vShowExperience = document.getElementById('showExperience').classList;
const vHideExperience = document.getElementById('hideExperience').classList;

function showViewMore() {
  document.getElementById('showExperience').classList.remove('hide');
}
function showLessView() {
  document.getElementById('showExperience').classList.add('hide');
}
function holdViewMore() {
  document.getElementById('showExperience').classList.add('hide');
}
function showExperience() {
  vExperience.remove('hide') &
    vShowExperience.add('hide') &
    vHideExperience.remove('hide');
}
function hideExperience() {
  vHideExperience.add('hide') &
    vExperience.add('hide') &
    vShowExperience.add('hide');
}

// ====== Show & OFF ========== EDUCATION ========= //
const vEducation = document.getElementById('education').classList;
const vShowEducation = document.getElementById('showEducation').classList;
const vHideEducation = document.getElementById('hideEducation').classList;

function showEduViewMore() {
  document.getElementById('showEducation').classList.remove('hide');
}
function showEduLessView() {
  document.getElementById('showEducation').classList.add('hide');
}
function holdEduViewMore() {
  document.getElementById('showEducation').classList.add('hide');
}

function showEducation() {
  vEducation.remove('hide') &
    vShowEducation.add('hide') &
    vHideEducation.remove('hide');
}

function hideEducation() {
  vEducation.add('hide') &
    vShowEducation.add('hide') &
    vHideEducation.add('hide');
}

// ====== Show & OFF ========== HOẠT ĐỘNG ========= //

const vActivity = document.getElementById('activity').classList;
const vShowActivity = document.getElementById('showActivity').classList;
const vHideActivity = document.getElementById('hideActivity').classList;

function showActivityViewMore() {
  document.getElementById('showActivity').classList.remove('hide');
}
function showActivityLessView() {
  document.getElementById('showActivity').classList.add('hide');
}
function holdActivityViewMore() {
  document.getElementById('showActivity').classList.add('hide');
}

function showActivity() {
  vActivity.remove('hide') &
    vShowActivity.add('hide') &
    vHideActivity.remove('hide');
}

function hideActivity() {
  vActivity.add('hide') & vShowActivity.add('hide') & vHideActivity.add('hide');
}

// ====== Show & OFF ========== SỞ THÍCH ========= //
const vHobby = document.getElementById('hobby').classList;
const vShowHobby = document.getElementById('showHobby').classList;
const vHideHobby = document.getElementById('hideHobby').classList;

function showHobbyViewMore() {
  document.getElementById('showHobby').classList.remove('hide');
}
function showHobbyLessView() {
  document.getElementById('showHobby').classList.add('hide');
}
function holdHobbyViewMore() {
  document.getElementById('showHobby').classList.add('hide');
}

function showHobby() {
  vHobby.remove('hide') & vShowHobby.add('hide') & vHideHobby.remove('hide');
}

function hideHobby() {
  vHobby.add('hide') & vShowHobby.add('hide') & vHideHobby.add('hide');
}

// ====== Show & OFF ========== NGÔN NGỮ========= //
const vLanguage = document.getElementById('language').classList;
const vShowLanguage = document.getElementById('showLanguage').classList;
const vHideLanguage = document.getElementById('hideLanguage').classList;

function showLanguageViewMore() {
  document.getElementById('showLanguage').classList.remove('hide');
}
function showLanguageLessView() {
  document.getElementById('showLanguage').classList.add('hide');
}
function holdLanguageViewMore() {
  document.getElementById('showLanguage').classList.add('hide');
}

function showLanguage() {
  vLanguage.remove('hide') &
    vShowLanguage.add('hide') &
    vHideLanguage.remove('hide');
}

function hideLanguage() {
  vLanguage.add('hide') & vShowLanguage.add('hide') & vHideLanguage.add('hide');
}

// ====== Show & OFF ========== KỸ NĂNG ========= //
const vSkills = document.getElementById('skills').classList;
const vShowSkills = document.getElementById('showSkills').classList;
const vHideSkills = document.getElementById('hideSkills').classList;

function showSkillsViewMore() {
  document.getElementById('showSkills').classList.remove('hide');
}
function showSkillsLessView() {
  document.getElementById('showSkills').classList.add('hide');
}
function holdSkillsViewMore() {
  document.getElementById('showSkills').classList.add('hide');
}

function showSkills() {
  vSkills.remove('hide') & vShowSkills.add('hide') & vHideSkills.remove('hide');
}

function hideSkills() {
  vSkills.add('hide') & vShowSkills.add('hide') & vHideSkills.add('hide');
}
