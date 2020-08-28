import React, { useState, useEffect } from "react";

export function FriendStatus (props) {

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  if (isOnline == null) return 'Loading...'

  return isOnline ? 'Online' : 'Offline'
}