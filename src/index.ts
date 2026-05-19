import * as fs from "fs";

import ExcelJS from "exceljs";

async function main() {
  const provinces = JSON.parse(
    fs.readFileSync("src/input/province-codes.json", "utf8"),
  );

  const districts = JSON.parse(
    fs.readFileSync("src/input/district-codes.json", "utf8"),
  );

  const subDistricts = JSON.parse(
    fs.readFileSync("src/input/subdistrict-codes.json", "utf8"),
  );

  // province lookup
  const provinceMap = new Map();

  for (const province of provinces) {
    provinceMap.set(province.code, province);
  }

  // district lookup
  const districtMap = new Map();

  for (const district of districts) {
    districtMap.set(district.code, district);
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Address");

  worksheet.columns = [
    {
      header: "Country",
      key: "country",
      width: 20,
    },
    {
      header: "Province",
      key: "provinceEn",
      width: 30,
    },
    {
      header: "จังหวัด",
      key: "provinceTh",
      width: 30,
    },
    {
      header: "District",
      key: "districtEn",
      width: 30,
    },
    {
      header: "เขต/อำเภอ",
      key: "districtTh",
      width: 30,
    },
    {
      header: "Sub-district",
      key: "subDistrictEn",
      width: 30,
    },
    {
      header: "แขวง/ตำบล",
      key: "subDistrictTh",
      width: 30,
    },
    {
      header: "ZipCode",
      key: "zipcode",
      width: 15,
    },
  ];

  const headerRow = worksheet.getRow(1);

  headerRow.height = 25;

  headerRow.eachCell((cell, colNumber) => {
    cell.font = {
      bold: true,
      color: {
        argb: "FFFFFFFF",
      },
    };

    cell.alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    cell.border = {
      top: {
        style: "thin",
      },
      left: {
        style: "thin",
      },
      bottom: {
        style: "thin",
      },
      right: {
        style: "thin",
      },
    };

    // Country
    if (colNumber === 1) {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: "FF555555",
        },
      };
    }

    // Province
    if (colNumber === 2 || colNumber === 3) {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: "FF4472C4",
        },
      };
    }

    // District
    if (colNumber === 4 || colNumber === 5) {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: "FF70AD47",
        },
      };
    }

    // Sub-district
    if (colNumber === 6 || colNumber === 7) {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: "FFED7D31",
        },
      };
    }

    // Zipcode
    if (colNumber === 8) {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: "FF7030A0",
        },
      };
    }
  });

  for (const subDistrict of subDistricts) {
    const district = districtMap.get(subDistrict.district_code);

    if (!district) {
      continue;
    }

    const province = provinceMap.get(district.province_code);

    if (!province) {
      continue;
    }

    worksheet.addRow({
      country: "Thailand",
      provinceEn: province.name,
      provinceTh: province.name_th,
      districtEn: district.name,
      districtTh: district.name_th,
      subDistrictEn: subDistrict.name,
      subDistrictTh: subDistrict.name_th,
      zipcode: subDistrict.zip_code,
    });
  }

  await workbook.xlsx.writeFile("src/output/address.xlsx");

  console.log("Excel generated");
}

main();
