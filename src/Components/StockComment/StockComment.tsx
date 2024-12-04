import React, { useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import { commentGetAPI, commentPostAPI } from "../../Services/CommentService";
import { CommentGet } from "../../Models/CommentGet";
import Spinner from "../Spinner/Spinner";
import StockCommentList from "../StockCommentList/StockCommentList";

type Props = {
  stockSymbol: string;
};
type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = async (e: CommentFormInputs) => {
    const result = await commentPostAPI(e.title, e.content, stockSymbol);
    getComments();
  };
  const getComments = async () => {
    setIsLoading(true);
    const commentData = await commentGetAPI(stockSymbol).then((res) => {
      setIsLoading(false);
      setComments(res?.data!);
    });
  };
  return (
    <div className="flex flex-col">
      {isLoading ? <Spinner /> : <StockCommentList comments={comments!} />}
      <StockCommentForm handleComment={handleComment} symbol={stockSymbol} />
    </div>
  );
};

export default StockComment;
