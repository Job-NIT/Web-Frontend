import { LocalScheme } from "~auth/runtime";

export default class DefaultScheme extends LocalScheme {
  async fetchUser(endpoint) {
    if (!this.check().valid) {
      return;
    }

    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return;
    }

    return this.$auth
      .requestWith(this.name, endpoint, this.options.endpoints.user)
      .then((response) => {
        const user = response.data;

        this.$auth.setUser(user);

        return response;
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: "fetchUser" });
      });
  }
}
