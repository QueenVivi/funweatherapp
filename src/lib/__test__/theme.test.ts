import { getTheme, Theme } from "@/lib/theme";

describe("getTheme", () => {
  it("returns Theme.Sunny when it is a sunny weather code", () => {
    const conditionCode = 1000;

    const theme = getTheme(conditionCode);

    expect(theme).toBe(Theme.Sunny);
  });

  test.each([
    1063, 1072, 1087, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192,
    1195, 1198, 1201, 1240, 1243, 1246, 1273, 1276,
  ])("returns Theme.Rainy when it is a rainy weather code", (conditionCode) => {
    const theme = getTheme(conditionCode);

    expect(theme).toBe(Theme.Rainy);
  });

  test.each([1003, 1006, 1009, 1030, 1135, 1147])(
    "returns Theme.Cloudy when it is a cloudy weather code",
    (conditionCode) => {
      const theme = getTheme(conditionCode);

      expect(theme).toBe(Theme.Cloudy);
    }
  );
  test.each([
    1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
    1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282,
  ])("returns Theme.Snowy when it is a snowy weather code", (conditionCode) => {
    const theme = getTheme(conditionCode);

    expect(theme).toBe(Theme.Snowy);
  });

  describe("returns Theme.Fallback when", () => {
    it("receives undefined parameter", () => {
      const conditionCode = undefined;
      const theme = getTheme(conditionCode);

      expect(theme).toBe(Theme.Fallback);
    });

    it("receives a non-existent weather code", () => {
      const conditionCode = 461321;
      const theme = getTheme(conditionCode);

      expect(theme).toBe(Theme.Fallback);
    });
  });
});
