import React from "react";
import { Dialog, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { EventNote, AccessTime } from "@mui/icons-material"; // Importing Material-UI icons
import data from "../../data.json";

export default function NotificationModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Notification</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.notifications.map((notification, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f5f5f5", // Adjust the background color for the hover effect
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell>
                  <EventNote fontSize="small" sx={{ marginRight: 1 }} />
                  {notification.message}
                </TableCell>
                <TableCell>
                  <AccessTime fontSize="small" sx={{ marginRight: 1 }} />
                  {notification.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
}
