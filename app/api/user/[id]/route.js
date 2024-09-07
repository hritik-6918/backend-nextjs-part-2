import { users } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const id = req.url.split("user/");
    console.log(id);
    console.log(users);

    return NextResponse.json("done");
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};

//Delete
export const DELETE = async (req) => {
  try {
    const id = req.url.split("user/")[1];
    console.log(id);
    console.log(users);

    const userIndex = users.findIndex((user) => user.id.toString() === id);
    console.log(userIndex);

    if (userIndex === -1) {
      return NextResponse.json({ message: "user data not found" });
    }
    users.splice(userIndex, 1);
    console.log(users);

    return NextResponse.json({ message: "deleted" });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};

//Update
export const PUT = async (req) => {
  try {
    const id = req.url.split("user/")[1];
    console.log(id);

    const { username } = await req.json();

    const user = users.find((user) => user.id.toString() === id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.username = username;

    return NextResponse.json({ message: "User updated" });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
