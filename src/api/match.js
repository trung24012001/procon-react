import { PREFIX, doPost, doDelete, showMessage } from "./commons";
import { useConfirm } from "material-ui-confirm";

const MATCH_URL = PREFIX + "/match";

export const apiDeleteTeamMatch = async (idMatch, idTeam) => {
  try {
    const result = await doDelete(`${MATCH_URL}/${idMatch}/team/${idTeam}`);
    showMessage(`Delete team from match succeeded`, "success");
    return result;
  } catch (e) {
    showMessage(`Delete team from match error: ${e.message}`, "error");
  }
  return false;
};
export const useConfirmDeleteTeamMatch = () => {
  const confirm = useConfirm();
  return async (idMatch, idTeam) => {
    try {
      await confirm({ description: "Are you sure?" });
      return apiDeleteTeamMatch(idMatch, idTeam);
    } catch (e) {
      return false;
    }
  };
};
export const apiNewTeamMatch = async (idMatch, idTeam) => {
  try {
    const result = await doPost(`${MATCH_URL}/${idMatch}/team/${idTeam}`, null);
    showMessage("Success add team to match", "success", 1000);
    return result;
  } catch (e) {
    showMessage(`Error add team to matc: ${e.message}`, "error");
  }
};
