
// function getCommunicationList(communication) {
//   return `
//   query{
//     communicationSearch(first: ` + communication + `, offset: 0 ){
//       items{
//         callDuration,
//         callStatus,
//         communicationID
//       }
//     }
//   }
//   `
// }

function getCommunicationList(communication) {
  return `
  query{
    communicationSearch (
      first: ` + communication + `, 
      offset: 0,
      filter: { origins: [ScorpionHomeWebchats] }
      sort: { orderBy: MostRecent, sort: Descending }
    ) {
      totalCount
      items {
       
        communicationID
        originType
        managed
        mostRecent
        }
      }
    }
  `
}

module.exports = {
  getCommunicationList: getCommunicationList,
};
