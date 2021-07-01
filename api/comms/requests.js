
function getCommunicationList(communication) {
  return `
  query{
    communicationSearch(first: ` + communication + `, offset: 0 ){
      items{
        callDuration,
        callStatus,
        communicationID
      }
    }
  }
  `
}

module.exports = {
  getCommunicationList: getCommunicationList,
};
