import React from "react";
import { Button } from "react-bootstrap";

export default props => {
  const { isLoading } = props;
  return (
    <Button type="submit" bsStyle="primary" disabled={isLoading}>
      {isLoading ? "Sending..." : "Send"}
    </Button>
  );
};
