import axios from 'axios';

export enum Routes {
  SUBMIT_CONTACT_FORM = '/api/submit'
}

export class FormService {
  public static submitForm (name: string, email: string, birth?: string, country?: string, city?: string,
                            facebook?: string, youtube?: string) {

    return axios.post(Routes.SUBMIT_CONTACT_FORM, {
      name,
      email,
      birth,
      country,
      city,
      facebook,
      youtube,
    });
  }
}
