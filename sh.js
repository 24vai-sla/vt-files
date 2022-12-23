const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };
  export const data = [
    {
      id: "1",
      name: "Mark Hill",
      designation: "CEO",
      team:"-"
    },
    {
      id: "2",
      name: "Joe Linux",
      designation: "Chief Technology officer",
      team: "Technology",
      manager: { "id": "1" }
    },
    {
        id: "3",
        name: "Linda May",
        designation: "Chief Business officer",
        team: "Business",
        manager: { "id": "1" }
    },
    {
        id: "4",
        name: "John Green",
        designation: "Chief Accounting officer",
        team: "Accounting",
        manager: { "id": "1" }
    },
    {
        id: "5",
        name: "Ron Blomquist ",
        designation: "Chief Information Security officer",
        team: "Technology",
        manager: { "id": "2" }
    },
    {
        id: "6",
        name: "Michael Rubin ",
        designation: "Chief Innovation officer",
        team: "Technology",
        manager: { "id": "2" }
    },
    {
        id: "7",
        name: "Alice Lopez ",
        designation: "Chief communication officer",
        team: "Business",
        manager: { "id": "3" }
    },
    {
        id: "8",
        name: "Mary Johnson ",
        designation: "Chief Brand officer",
        team: "Business",
        manager: { "id": "3" }
    },
    {
        id: "9",
        name: "kirk Douglas ",
        designation: "Chief Business Developer officer",
        team: "Business",
        manager: { "id": "3" }
    },
    {
        id: "10",
        name: "Erica Reel ",
        designation: "Chief Customer officer",
        team: "Accounting",
        manager: { "id": "4" }
    },
  ];
   
 
  