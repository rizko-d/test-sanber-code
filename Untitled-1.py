def getSubdomains(websiteList): 
  subdomains = []
  for website in websiteList: 
    domainParts = website.split("//") 
    if len(domainParts) == 2: 
      subdomains.append(domainParts[1])
    else:
      subdomains.append(domainParts[0])
  
  return subdomains
  
websites = ["https://id.bitdegree.org", "https://finance.detik.com", "https://telkom.co.id", "https://corona.jakarta.go.id"] 
subdomains = getSubdomains(websites) 

for i in range(len(subdomains)):
  if '.' in subdomains[i]:
    print(subdomains[i].split('.')[0] + '.' + subdomains[i].split('.')[1])
  else:
    print(subdomains[i])    