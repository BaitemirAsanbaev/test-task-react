import { Avatar, Box, Typography, Grid, Paper } from '@mui/material';
import { IUser } from '../../models/IUser.ts';

type Props = {
    user: IUser;
};

export default function UserInfo({ user }: Props) {
    return (
        <Paper elevation={0} sx={{ padding: 2, maxWidth: 400 }}>
            <Grid container spacing={2} alignItems="center">
                {/* User Avatar */}
                <Grid item>
                    <Avatar
                        alt={user.name}
                        src={user.avatar}
                        sx={{ width: 80, height: 80 }}
                    />
                </Grid>

                {/* User Details */}
                <Grid item xs={12}>
                    <Typography variant="h5">{user.name} (@{user.username})</Typography>
                    <Typography variant="body1" color="textSecondary">
                        {user.role}
                    </Typography>
                </Grid>

                {/* Contact Information */}
                <Grid item xs={12}>
                    <Box mt={2}>
                        <Typography variant="body2">
                            <strong>Email:</strong> {user.email}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Phone:</strong> {user.phone}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Address:</strong> {user.address}
                        </Typography>
                    </Box>
                </Grid>

                {/* Age and ID */}
                <Grid item xs={6}>
                    <Typography variant="body2">
                        <strong>Age:</strong> {user.age}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2">
                        <strong>ID:</strong> {user.id}
                    </Typography>
                </Grid>

                {/* Verification Status */}
                <Grid item xs={12}>
                    <Typography variant="body2">
                        <strong>Verified:</strong> {user.verified ? 'Yes' : 'No'}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
