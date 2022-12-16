import {ProfilePageType, profileReducer, setUserProfile, setUserStatus} from "../profile-reducer";

let startState: ProfilePageType

beforeEach(() => {
  startState = {
    profile: {
      aboutMe: null,
      contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null
      },
      lookingForAJob: true,
      lookingForAJobDescription: null,
      fullName: '',
      userId: 0,
      photos: {
        small: undefined,
        large: undefined
      }
    },
    userStatus: '',
    isEditProfile: false
  }
})

test('correct error message should be set', () => {
  const newProfile = {
    aboutMe: 'i\'m enjoy',
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: null,
    fullName: '',
    userId: 0,
    photos: {
      small: undefined,
      large: undefined
    }
  }

  const endState = profileReducer(startState, setUserProfile(newProfile))

  expect(endState.profile.aboutMe).toBe('i\'m enjoy');
})

test('correct status should be set', () => {

  const endState = profileReducer(startState, setUserStatus('angular'))

  expect(endState.userStatus).toBe('angular');
})
