


export class orange {

    /**
     * 
     * @param {import ('playwright').Page} page 
     */

  constructor(page) {
    this.page = page;
    this.usernameField = page.getByPlaceholder("Username")
    this.passwordField = page.getByPlaceholder('Password')
    this.loginBtn = page.getByRole('button', {name: ' Login ', exact:true})
  }

  async goto() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  async login(un,pwd) {
    await this.usernameField.fill(un)
    await this.passwordField.fill(pwd)
    await this.loginBtn.click()
  }
};