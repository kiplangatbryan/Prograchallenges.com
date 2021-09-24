const functions = require('firebase-functions')
const admin = require('firebase-admin')

const insertComment = functions.https.onCall(async (data) => {
    const challengeId = data.id;
    const userEmail = data.email;
    const userNickName = data.nickname;
    const commentText = data.text;

    // use ZOD for this
    if (challengeId === '', userEmail === '', userNickName === '', commentText === '')
        throw new functions.https.HttpsError('invalid-argument', 'All fields are required')

    admin.firestore().collection('comments').add({
        challengeId: challengeId,
        email: userEmail,
        nickname: userNickName,
        text: commentText,
    });
})

module.exports = insertComment;