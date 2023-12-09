import React from "react";
import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  Button,
} from "@mui/material";
import { EventNote, AccessTime } from "@mui/icons-material";
import data from "../../data.json";

export default function NotificationModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
                Notification
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.notifications.map((notification, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{ color: "text.primary", wordWrap: "break-word" }}
                >
                  <EventNote
                    fontSize="small"
                    sx={{
                      marginRight: 1,
                      color: "info.main",
                      wordWrap: "break-word",
                    }}
                  />
                  {notification.message}
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>
                  <AccessTime
                    fontSize="small"
                    sx={{ marginRight: 1, color: "text.secondary" }}
                  />
                  {notification.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter
            sx={{ display: "flex", justifyContent: "center" }}
          ></TableFooter>
        </Table>
      </TableContainer>{" "}
      <Button
        sx={{ padding: "13px", backgroundColor: "#EEFAFE" }}
        onClick={onClose}
      >
        Bağla
      </Button>
    </Dialog>
  );
}
