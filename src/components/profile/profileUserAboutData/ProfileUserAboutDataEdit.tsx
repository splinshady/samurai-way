import React from 'react';
import {ContactsType} from "../../../state/profile-reducer";
import style from "./ProfileUserAboutData.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formControl/Input";
import {Button} from "../../common/Button/Button";

export type ProfileDataEditFormType = {
  aboutMe: string | null,
  lookingForAJob: boolean,
  lookingForAJobDescription: string | null,
  contacts: ContactsType
}

type ProfileUserAboutDataEditPropsType = InjectedFormProps<ProfileDataEditFormType>

const ProfileUserAboutDataEdit = (props: ProfileUserAboutDataEditPropsType) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className={style.description_container}>
          <h5>About me: </h5>
          <Field placeholder={'About me'}
                 name={'aboutMe'}
                 component={Input}
                 validate={[]}
          />
        </div>

        <div className={style.description_container}>
          <h5>Looking for a job: </h5>
          <Field name={'lookingForAJob'}
                 component={Input}
                 type={'checkbox'}
                 validate={[]}
          />
        </div>

        <div className={style.description_container}>
          <h5>Looking for a job description: </h5>
          <Field placeholder={'Looking for a job description'}
                 name={'lookingForAJobDescription'}
                 component={Input}
                 validate={[]}
          />
        </div>

        <div>
          <h5>Contacts</h5>
          <div className={style.contacts_container}>
            <div className={style.description_container}>
              <h6>Facebook: </h6>
              <Field placeholder={'facebook'}
                     name={'contacts.facebook'}
                     component={Input}
                     validate={[]}
              />
            </div>

            <div className={style.description_container}>
              <h6>Website: </h6>
              <Field placeholder={'website'}
                     name={'contacts.website'}
                     component={Input}
                     validate={[]}
              />
            </div>

            <div className={style.description_container}>
            <h6>Vk: </h6>
            <Field placeholder={'vk'}
                   name={'contacts.vk'}
                   component={Input}
                   validate={[]}
            />
          </div>

            <div className={style.description_container}>
              <h6>Twitter: </h6>
              <Field placeholder={'twitter'}
                     name={'contacts.twitter'}
                     component={Input}
                     validate={[]}
              />
            </div>

            <div className={style.description_container}>
              <h6>Instagram: </h6>
              <Field placeholder={'instagram'}
                     name={'contacts.instagram'}
                     component={Input}
                     validate={[]}
              />
            </div>

            <div className={style.description_container}>
              <h6>Youtube: </h6>
              <Field placeholder={'youtube'}
                     name={'contacts.youtube'}
                     component={Input}
                     validate={[]}
              />
            </div>

            <div className={style.description_container}>
              <h6>Github: </h6>
              <Field placeholder={'github'}
                     name={'contacts.github'}
                     component={Input}
                     validate={[]}
              />
            </div>

            <div className={style.description_container}>
              <h6>mainLink: </h6>
              <Field placeholder={'mainLink'}
                     name={'contacts.mainLink'}
                     component={Input}
                     validate={[]}
              />
            </div>

          </div>
        </div>
        {props.error &&  <span className={style.common_form_error}>{props.error}</span>}
        <Button type='submit'>save</Button>
      </form>
    </>
  )
}

export const ProfileUserAboutDataEditForm = reduxForm<ProfileDataEditFormType>({form: 'profile-contacts'})(ProfileUserAboutDataEdit);