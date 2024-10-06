import { useForm } from 'react-hook-form';
import { IUser, Role } from '../../models/IUser';
import {
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Grid
} from '@mui/material';
import {useAppDispatch} from "../../store/hooks.ts";
import {createUser} from "../../store/services.ts";
import {toggleCreateWindow} from "../../store/slices/modalSlice.ts";

const CreateUserForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>({
        defaultValues: {
            role: Role.USER,
            verified: false,
        },
    });
    const dispatch = useAppDispatch()
    const onSubmit = (newUser: IUser) => {
        dispatch(createUser(newUser))
        dispatch(toggleCreateWindow())
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 style={{textAlign:"center", margin:"20px 0"}}>Create new user</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        {...register('name', { required: 'Name is required' })}
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ''}
                    />
                </Grid>

                {/* Username Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        {...register('username', { required: 'Username is required' })}
                        error={!!errors.username}
                        helperText={errors.username ? errors.username.message : ''}
                    />
                </Grid>

                {/* Email Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Please enter a valid email address',
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                    />
                </Grid>

                {/* Phone Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Phone"
                        variant="outlined"
                        {...register('phone')}
                    />
                </Grid>

                {/* Age Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Age"
                        type="number"
                        variant="outlined"
                        {...register('age', {
                            required: 'Age is required',
                            valueAsNumber: true,
                            min: { value: 0, message: 'Age must be at least 0' },
                        })}
                        error={!!errors.age}
                        helperText={errors.age ? errors.age.message : ''}
                    />
                </Grid>

                {/* Address Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        {...register('address')}
                    />
                </Grid>

                {/* Avatar Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Avatar URL"
                        variant="outlined"
                        {...register('avatar')}
                    />
                </Grid>

                {/* Role Selection */}
                <Grid item xs={12} sm={6}>
                    <FormControl  fullWidth variant="outlined">
                        <InputLabel>Role</InputLabel>
                        <Select
                            style={{width:"100%"}}
                            label="Role"
                            defaultValue={Role.USER}
                            {...register('role')}
                        >
                            {Object.values(Role).map((role) => (
                                <MenuItem key={role} value={role}>
                                    {role}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Verified Checkbox */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...register('verified')}
                                defaultChecked={false}
                                color="primary"
                            />
                        }
                        label="Verified"
                    />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Create User
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default CreateUserForm;
