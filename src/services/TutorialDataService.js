import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/alunos");
  }

  get(alunoId) {
    return http.get(`/alunos/${alunoId}`);
  }

  create(data) {
    return http.post("/alunos", data);
  }

  update(alunoId, data) {
    return http.put(`/alunos/${alunoId}`, data);
  }

  delete(alunoId) {
    return http.delete(`/alunos/${alunoId}`);
  }

  deleteAll() {
    return http.delete(`/alunos`);
  }

  findByTitle(nome) {
    return http.get(`/alunos?nome=${nome}`);
  }
}

export default new TutorialDataService();
