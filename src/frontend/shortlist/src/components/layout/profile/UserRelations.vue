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
main {
  background-color: pink;
}
</style>
