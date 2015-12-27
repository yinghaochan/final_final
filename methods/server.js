// import all methods here (export must be a function)
import changeIndex from './changeIndex'
import createPresentation from './createPresentation'
import createSharingCode from './createSharingCode'
import votes from './votes'
import ownerShowUpdate from './ownerShowUpdate'
import createDeck from './createDeck'
import createShow from './createShow'
import { updatePace, updateUserCount, addAudience, removeAudience } from './Audience'


// add to combined Meteor.methods, which will have the var name.
Meteor.methods({
  addAudience,
  changeIndex,
  createDeck,
  createPresentation,
  createSharingCode,
  createShow,
  ownerShowUpdate,
  removeAudience,
  updatePace,
  updateUserCount,
  votes,
})

