<script></script>
<template>
  <main>
    <label class="pref-title">Student Accounts</label>
    <div id="students">
      <span class="studentlistpanel">
        <span class="student">
          <h2>
            <img
              src="/default-student-profile.png"
              alt="Avatar"
              class="studentimg"
            />
          </h2>
          <h3>Student 1</h3>
          <p>
            <lable class="fileidlable">Student1 Name</lable>
            <lable class="fileidlable">Student1 Email</lable>
          </p>
          <button>
            Remove <img src="del-student.png" class="studentupdateimg" />
          </button>
        </span>
      </span>
      <span class="studentlistpanel">
        <span class="student">
          <h2>
            <img
              src="/default-student-profile.png"
              alt="Avatar"
              class="studentimg"
            />
          </h2>
          <h3>Student 2</h3>
          <p>
            <lable class="fileidlable">Student2 Name</lable>
            <lable class="fileidlable">Student2 Email</lable>
          </p>
          <button>
            Remove <img src="del-student.png" class="studentupdateimg" />
          </button>
        </span>
      </span>
    </div>
    <span
      ><button type="button" class="btn btn-outline-light">
        <img src="add-student.png" class="studentupdateimg" /></button
    ></span>
  </main>
</template>
<style scoped>
.pref-title {
  font-family: "Cabin Sketch", cursive;
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: 10px;
  line-height: 2rem;
  color: #067418;
}
.accounts {
  border: 1px solid grey;
  width: 25%;
  white-space: nowrap;
  align-content: center;
}
.studentimg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.studentupdateimg {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.fileidlable {
  color: rgb(0, 0, 0);
  font-size: small;
  padding: 1%;
  float: left;
  margin-right: 5px;
}

body {
  background: #262a2b;
}

.studentlistpanel {
  padding: 0;
  margin: 50px auto;
  list-style: none;
  text-align: center;
}
.studentlistpanel .student {
  display: inline-block;
  width: 20%;
  height: 10px;
  min-width: 100px;
  max-width: 160px;
  padding: 5px 5px 5px 5px;
  position: relative;
  vertical-align: top;
  margin: 10px;
  font-family: "helvetica", san-serif;
  min-height: 20vh;
  background: #bad1be;
  border: 1px solid #000000;
  text-align: left;
}
.studentlistpanel .student h2 {
  margin: 0;
  position: absolute;
  opacity: 0.6;
  top: 40px;
  right: 5px;
  transition: all 0.3s ease-in-out;
}
.studentlistpanel .student h3 {
  font-size: 20px;
  color: #000000;
  margin-bottom: 5px;
}
.studentlistpanel .student p {
  font-size: 16px;
  line-height: 18px;
  color: #b7b7b7;
  margin-top: 5px;
}
.studentlistpanel .student button {
  background: transparent;
  border: 1px solid #000000;
  padding: 10px 20px;
  color: #ffffff;
  border-radius: 3px;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform: translateY(-40px);
  opacity: 0;
  cursor: pointer;
  overflow: hidden;
}
.studentlistpanel .student button:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 120%;
  background: #ccacac;
  top: 0;
  opacity: 0;
  left: -140px;
  border-radius: 0 20px 20px 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
.studentlistpanel .student:hover button {
  transform: translateY(5px);
  opacity: 1;
}
.studentlistpanel .student button:hover {
  color: #000000;
}
.studentlistpanel .student button:hover:before {
  left: 0;
  opacity: 1;
}
.studentlistpanel .student:hover h2 {
  top: 20px;
  opacity: 1;
}

.studentlistpanel .student:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  background: #fff;
  transform: skew(2deg, 2deg);
}
.studentlistpanel .student:after {
  content: "";
  position: absolute;
  width: 40%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.02);
}
.studentlistpanel .student:nth-child(1):before {
  background: #083201;
  background: -webkit-linear-gradient(to right, #bdc6c0, #72df5f);
  background: linear-gradient(to right, #000000, #57d640);
}
</style>
