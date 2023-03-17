import React from "react";
import { useEffect, useState } from "react";
import { Paper, Box, CardHeader, Typography } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import { IconButton } from "@mui/material";
import {
  getAllUsers,
  deleteUser,
  updateUser,
} from "../../controller/user-controller";
import CustomDialog from "../shared/UI/CustomDialog";
import UpdateDialog from "../shared/UI/UpdateDialog";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openDelete, setOpenDelete] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(null);

  const [id, setId] = useState(null);

  const handleOpenDelete = (id) => setOpenDelete(id);
  const handleCloseDelete = () => setOpenDelete(null);

  const handleOpenUpdate = (id) => {
    setId(id);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => setOpenUpdate(null);

  useEffect(() => {
    const load = async () => {
      const data = await getAllUsers();
      setUsers(data);
      setIsLoading(false);
    };
    load();
  }, []);

  const handleDeleteUser = async () => {
    await deleteUser(openDelete);
    handleCloseDelete();
    document.location.reload(true);
  };
  const handleUpdateUser = async (obj) => {
    const { name, email } = obj.inputs;
    const newObj = { name: name.value, email: email.value };
    await updateUser(id, newObj);
    handleCloseUpdate();
    document.location.reload(true);
  };
  return (
    <>
      <Paper
        elevation={10}
        sx={{
          mb: 2,
          p: 2,
          minWidth: "275px",
          backgroundColor: "primary.main",
        }}
      >
        <CardHeader title="Users" />
        {!isLoading && (
          <Box>
            {users.length === 0 ? (
              <Typography align="center">No users</Typography>
            ) : (
              users.map((u) => (
                <>
                  <Paper
                    key={u._id}
                    elevation={5}
                    sx={{ backgroundColor: "white", mb: 2 }}
                  >
                    <CardHeader
                      title={u.name}
                      sx={{}}
                      subheader={u.email}
                      action={
                        <>
                          <IconButton onClick={() => handleOpenUpdate(u._id)}>
                            <UpdateRoundedIcon color="primary" />
                          </IconButton>
                          <IconButton onClick={() => handleOpenDelete(u._id)}>
                            <ClearRoundedIcon color="error" />
                          </IconButton>
                        </>
                      }
                    />
                  </Paper>
                </>
              ))
            )}
          </Box>
        )}
      </Paper>
      <CustomDialog
        onClose={handleCloseDelete}
        open={Boolean(openDelete)}
        onConfirm={handleDeleteUser}
        title="Do you really want to delete this user?"
        cardContent={<Typography>{"This action cannot be ondone!"}</Typography>}
      />
      <UpdateDialog
        onClose={handleCloseUpdate}
        open={openUpdate}
        id={id}
        users={users}
        onConfirm={handleUpdateUser}
      />
    </>
  );
};

export default UserList;
