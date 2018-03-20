<template>
  <div id="resumePreview">
    <h1>{{resume.person.name}}</h1>
    <p>{{resume.person.sex}}</p>
    <p>{{resume.person.age}}</p>
  </div>
</template>

<script>
export default {
  name: 'ResumePreview',
  props:['resume'],
}
</script>

<style>
  #resumePreview{
    color: blue;
    /* border: 1px solid yellow; */
    min-height: 100px;
  }
</style>