import styles from './ParticipantStatusIcon.module.css';

function ParticipantStatusIcon({participant, albums, picksPerParticipant}) {
  // Determine if the participant has submitted all their picks for the round
  const isFinished = testIsFinished(participant, albums, picksPerParticipant);

  const unfinishedStyle = {
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: participant.color,
    borderRightColor: participant.color,
    borderBottomColor: participant.color
  };

  const finishedStyle = {
    backgroundColor: participant.color
  };

  const finishedIcon = (<div className={styles.finishedIcon} style={finishedStyle}></div>);
  const unfinishedIcon = (<div className={styles.unfinishedIcon} style={unfinishedStyle}></div>);

  return (
    <div className={styles.ParticipantStatusIcon}>
      {
        isFinished ? finishedIcon : unfinishedIcon
      }

      <p>{participant.firstName[0] + participant.lastName[0]}</p>
    </div>
  );
}

function testIsFinished(participant, albums, votesPerParticipant) {
  for (let album of albums) {
    const participantPicks = album.pickedTracks.filter(pickedTrack => {
      return pickedTrack.pickerIds.includes(participant.id);
    });

    if (participantPicks.length < votesPerParticipant)
      return false;
  }

  return true;
}

export default ParticipantStatusIcon;
