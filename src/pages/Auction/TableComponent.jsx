import React from "react";

const TableComponent = () => {
  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <strong>Serial number / VIN</strong>
            </td>
            <td className="flex-r justify-content-between">
              Lorem, ipsum dolor.
              <i className="bi bi-camera"></i>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Unit serial number</strong>
            </td>
            <td>Lorem, ipsum dolor.</td>
          </tr>
          <tr>
            <td>
              <strong>Picture, left front corner</strong>
            </td>
            <td className="text-end">
              <i className="bi bi-camera"></i>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Picture, left rear corner</strong>
            </td>
            <td className="text-end">
              <i className="bi bi-camera"></i>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Picture, right rear corner</strong>
            </td>
            <td className="text-end">
              <i className="bi bi-camera"></i>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Picture, right front corner</strong>
            </td>
            <td className="text-end">
              <i className="bi bi-camera"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
