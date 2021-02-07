import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = "collokoech";
  private client_id = "5c032946208e694eef87";
  private client_secret = "a8960be76be93fac2a8fc3ca800710b021df7af5";

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos" +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}
