import bodyParser from 'body-parser';
// import cors from 'cors';
import { Server } from '@overnightjs/core';
import { UserController } from '../controllers';

export class FindARideServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === 'development'); // setting showLogs to true
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // this.app.use(cors());
    // this.app.use(errorHandler);
    this.setupControllers();
  }

  private setupControllers(): void {
    const userController = new UserController();
    // const signupController = new SignupController();
    // super.addControllers() must be called, and can be passed a single controller or an array of
    // controllers. Optional router object can also be passed as second argument.
    super.addControllers([userController] /*, optional router here*/);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log('Server listening on port: ' + port);
    });
  }
}
