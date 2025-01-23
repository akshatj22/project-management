import { Task } from "@/state/api";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white ">
      {task.attachments && task.attachments.length > 0 && (
        <div>
          <strong>Attachments:</strong>
          <div className="flex flex-wrap">
            {task.attachments && task.attachments.length > 0 && (
              <Image
                src={`https://pm-s3-bucket-image.s3.us-east-1.amazonaws.com/${task.attachments[0].fileURL}`}
                alt={task.attachments[0].fileName}
                width={400}
                height={200}
                className="rounded-md"
              />
            )}
          </div>
        </div>
      )}
      <p>
        <strong>ID:</strong> {task.id}
      </p>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Description:</strong>{" "} {task.description || "No description"}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>Priority:</strong> {task.priority}
      </p>
      <p>
        <strong>Tags:</strong> {task.tags || "No tags"}
      </p>
      <p>
        <strong>Start Date:</strong> {" "}{task.startDate ? format(new Date(task.startDate), "P") : "No start date"}
      </p>
      <p>
        <strong>Due Date:</strong> {" "}{task.dueDate ? format(new Date(task.dueDate), "P") : "No start date"}
      </p>
      <p>
        <strong>Author:</strong> {task.author ? task.author.username : "No author"}
      </p>
      <p>
        <strong>Assignee:</strong> {task.assignee ? task.assignee.username : "No assignee"}
      </p>
    </div>
  );
};

export default TaskCard;
