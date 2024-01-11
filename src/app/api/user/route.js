import { NextResponse } from "next/server";
export function GET(){
    const users =[
        {
        name: "user1",
        phone: "1234",
        course: "js"
    },
        {
        name: "user2",
        phone: "1234",
        course: "c"
    },
        {
        name: "user3",
        phone: "1234",
        course: "cp"
    },
];
return NextResponse.json(users);
}

