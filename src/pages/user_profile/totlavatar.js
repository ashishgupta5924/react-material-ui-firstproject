import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function TotalAvatars() {
  return (
    <>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="C:\Users\dollop\Desktop\ui\myapp\src\pages\image\man10.png" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      <p>Kethi Ferrazi,jhon Densal ,and 5 other</p>
      </Stack>
      </>
  );
}
