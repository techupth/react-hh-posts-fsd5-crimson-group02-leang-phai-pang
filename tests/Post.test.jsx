import { render, screen, fireEvent } from "@testing-library/react";
import Posts from "../src/components/Posts.jsx";

describe("React-Post : App", () => {

    it("ยังไม่ได้นำข้อมูล Post ทั้งหมดมา Render", () => {
        render(<Posts />)
        const regex = new RegExp("Post Title #");
        const countPost = screen.getAllByText(regex);
        expect(countPost.length).toBe(10);
    });

    it("ยังไม่ได้แสดง Post's id", () => {
        render(<Posts />)
        const regex = new RegExp("Post Title #2");
        const postId = screen.getByText(regex);
        expect(postId).toBeInTheDocument();
    });

    it("ยังไม่ได้แสดง Post's likes", () => {
        render(<Posts />)
        const regex = new RegExp("50");
        const postLike = screen.getByText(regex);
        expect(postLike).toBeInTheDocument();
    });

    it("ยังไม่ได้แสดง Post's content", () => {
        render(<Posts />)
        const regex = new RegExp("Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.");
        const postContent = screen.getByText(regex);
        expect(postContent).toBeInTheDocument();
    });

    it("กดปุ่ม Like แล้วจำนวน Like ยังไม่สามารถเพิ่มขึ้นทีละ 1 ได้อย่างอิสระจากกัน", () => {
        render(<Posts />)
        const likeButton = screen.getAllByRole("button", {
            name: "Like",
        });

        likeButton.forEach((like) => {
            fireEvent.click(like);
        });
        const regex = new RegExp("51");
        const totalLike = screen.getByText(regex);
        expect(totalLike).toBeInTheDocument();
    });

    it("กดปุ่ม Dislike แล้วจำนวน Dislike ยังไม่สามารถลดลงทีละ 1 ได้อย่างอิสระจากกัน", () => {
        render(<Posts />)
        const dislikeButton = screen.getAllByRole("button", {
            name: "Dislike",
        });

        dislikeButton.forEach((like) => {
            fireEvent.click(like);
            fireEvent.click(like);
        });

        const regex = new RegExp("49");
        const totalLike = screen.getByText(regex);
        expect(totalLike).toBeInTheDocument();
    });

    it("กดปุ่ม Dislike แล้วจำนวน Dislike ยังติดลบ", () => {
        render(<Posts />)
        const dislikeButton = screen.getAllByRole("button", {
            name: "Dislike",
        });

        dislikeButton.forEach((dislikeButton) => {
            fireEvent.click(dislikeButton);
        });
        const negativeDislikes = screen.queryByText("-1");
        expect(negativeDislikes).not.toBeInTheDocument();
    });

});