<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          required
          v-model="aluno.nome"
          name="nome"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="aluno.email"
          name="email"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      aluno: {
        alunoId: null,
        nome: "",
        email: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        nome: this.aluno.nome,
        email: this.aluno.email
      };

      TutorialDataService.create(data)
        .then(response => {
          this.aluno.alunoId = response.data.alunoId;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.aluno = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
