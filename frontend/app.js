// frontend/app.js
const CONTRACT_ADDRESS = "0x06F0fF0e1a8F2Fc5bA6cd55a93f05e60Fd93459D";
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_jobId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_resumeLink",
				"type": "string"
			}
		],
		"name": "applyJob",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "jobId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "applicant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "resumeLink",
				"type": "string"
			}
		],
		"name": "JobApplicationSubmitted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "jobId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "employer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "salary",
				"type": "uint256"
			}
		],
		"name": "JobPosted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "jobId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"name": "JobStatusUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_salary",
				"type": "uint256"
			}
		],
		"name": "postJob",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_jobId",
				"type": "uint256"
			}
		],
		"name": "toggleJobStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "applicantApplications",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "applicationCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "employerJobs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getActiveJobs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "salary",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "employer",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "applicantCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct SkillLink.Job[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllJobs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "salary",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "employer",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "applicantCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct SkillLink.Job[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_applicant",
				"type": "address"
			}
		],
		"name": "getApplicantApplications",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_employer",
				"type": "address"
			}
		],
		"name": "getEmployerJobs",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_jobId",
				"type": "uint256"
			}
		],
		"name": "getJob",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "salary",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "employer",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "applicantCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct SkillLink.Job",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_jobId",
				"type": "uint256"
			}
		],
		"name": "getJobApplicationCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_jobId",
				"type": "uint256"
			}
		],
		"name": "getJobApplications",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "jobId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "applicant",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "resumeLink",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct SkillLink.Application[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalApplications",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalJobs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jobApplications",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "jobId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "applicant",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "resumeLink",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "jobCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jobs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "salary",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "employer",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "applicantCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Global variables
let web3Provider;
let signer;
let contract;
let userAccount;
let jobsData = [];

// Initialize DApp
document.addEventListener('DOMContentLoaded', function() {
    initializeDApp();
    setupEventListeners();
});

async function initializeDApp() {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        
        // Check if already connected
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            await connectWallet();
        }
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);
    } else {
        console.log('MetaMask is not installed');
        updateWalletButton('Install MetaMask', false);
    }
}

function setupEventListeners() {
    // Connect wallet button
    const connectWalletBtn = document.getElementById('connectWallet');
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', connectWallet);
    }
    
    // Job form submission
    const jobForm = document.getElementById('jobForm');
    if (jobForm) {
        jobForm.addEventListener('submit', handleJobSubmission);
    }
    
    // Application form submission
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', handleJobApplication);
    }

    // Close modal buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Modal backdrop clicks
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

// Wallet Functions
async function connectWallet() {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to use this application!');
            return;
        }

        // Request account access
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        userAccount = accounts[0];
        
        // Initialize ethers
        web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = web3Provider.getSigner();
        
        // Initialize contract
        contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        
        // Check network
        const network = await web3Provider.getNetwork();
        if (network.chainId !== 11155111) { // Sepolia testnet
            await switchToSepolia();
        }
        
        updateWalletButton(`${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`, true);
        
        // Load initial data
        if (typeof loadJobs === 'function') {
            await loadJobs();
        }
        
        // Update stats on landing page
        if (typeof updateStats === 'function') {
            updateStats();
        }
        
        console.log('Wallet connected successfully!');
        
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please try again.');
    }
}

async function switchToSepolia() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }], // Sepolia chainId in hex
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0xaa36a7',
                        chainName: 'Sepolia Test Network',
                        nativeCurrency: {
                            name: 'SepoliaETH',
                            symbol: 'ETH',
                            decimals: 18,
                        },
                        rpcUrls: ['https://sepolia.infura.io/v3/'],
                        blockExplorerUrls: ['https://sepolia.etherscan.io'],
                    }],
                });
            } catch (addError) {
                console.error('Error adding Sepolia network:', addError);
            }
        }
    }
}

function updateWalletButton(text, connected) {
    const connectWalletBtn = document.getElementById('connectWallet');
    if (connectWalletBtn) {
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> ${text}`;
        connectWalletBtn.style.background = connected ? 'var(--success-color)' : '';
    }
}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
        userAccount = null;
        updateWalletButton('Connect Wallet', false);
    } else if (accounts[0] !== userAccount) {
        userAccount = accounts[0];
        updateWalletButton(`${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`, true);
    }
}

function handleChainChanged(chainId) {
    window.location.reload();
}

// Contract Functions
async function postJob(title, description, salary) {
    try {
        if (!contract) {
            throw new Error('Please connect your wallet first');
        }
        
        if (!title || !description || !salary) {
            throw new Error('All fields are required');
        }
        
        if (salary <= 0) {
            throw new Error('Salary must be greater than 0');
        }
        
        console.log('Posting job:', { title, description, salary });
        
        // Show loading modal
        showLoadingModal('Broadcasting to Blockchain', 'Please confirm the transaction in your wallet...');
        
        // Call smart contract function
        const transaction = await contract.postJob(title, description, salary);
        
        updateLoadingModal('Transaction Submitted', 'Waiting for blockchain confirmation...');
        
        // Wait for transaction confirmation
        const receipt = await transaction.wait();
        
        console.log('Job posted successfully!', receipt);
        
        hideLoadingModal();
        return receipt;
        
    } catch (error) {
        hideLoadingModal();
        console.error('Error posting job:', error);
        
        let errorMessage = 'Failed to post job. Please try again.';
        if (error.message.includes('user rejected')) {
            errorMessage = 'Transaction was rejected by user.';
        } else if (error.message.includes('insufficient funds')) {
            errorMessage = 'Insufficient funds for gas fees.';
        } else if (error.reason) {
            errorMessage = error.reason;
        }
        
        throw new Error(errorMessage);
    }
}

async function loadJobs() {
    try {
        if (!contract) {
            console.log('Contract not initialized, using mock data');
            jobsData = []; // Empty array if no contract
            return;
        }
        
        console.log('Fetching jobs from blockchain...');
        
        // Fetch all jobs from smart contract
        const jobs = await contract.getAllJobs();
        
        jobsData = jobs.map(job => ({
            id: job.id.toString(),
            title: job.title,
            description: job.description,
            salary: job.salary.toString(),
            employer: job.employer,
            isActive: job.isActive,
            applicantCount: job.applicantCount.toString(),
            timestamp: job.timestamp.toString()
        }));
        
        console.log('Jobs loaded:', jobsData);
        
        // Make jobsData globally available
        window.jobsData = jobsData;
        
    } catch (error) {
        console.error('Error loading jobs:', error);
        jobsData = [];
        window.jobsData = [];
        
        // Don't throw error, just log it
        if (error.message.includes('call revert exception')) {
            console.log('No jobs found or contract not deployed');
        }
    }
}

async function applyJob(jobId, resumeLink) {
    try {
        if (!contract) {
            throw new Error('Please connect your wallet first');
        }
        
        if (!resumeLink) {
            throw new Error('Resume link is required');
        }
        
        // Validate URL format
        try {
            new URL(resumeLink);
        } catch {
            throw new Error('Please enter a valid URL');
        }
        
        console.log('Applying to job:', { jobId, resumeLink });
        
        // Show loading modal
        showLoadingModal('Submitting Application', 'Please confirm the transaction in your wallet...');
        
        // Call smart contract function
        const transaction = await contract.applyJob(jobId, resumeLink);
        
        updateLoadingModal('Application Submitted', 'Waiting for blockchain confirmation...');
        
        // Wait for transaction confirmation
        const receipt = await transaction.wait();
        
        console.log('Application submitted successfully!', receipt);
        
        hideLoadingModal();
        return receipt;
        
    } catch (error) {
        hideLoadingModal();
        console.error('Error applying to job:', error);
        
        let errorMessage = 'Failed to submit application. Please try again.';
        if (error.message.includes('user rejected')) {
            errorMessage = 'Transaction was rejected by user.';
        } else if (error.message.includes('already applied')) {
            errorMessage = 'You have already applied to this job.';
        } else if (error.message.includes('insufficient funds')) {
            errorMessage = 'Insufficient funds for gas fees.';
        } else if (error.reason) {
            errorMessage = error.reason;
        }
        
        throw new Error(errorMessage);
    }
}

async function closeJob(jobId) {
    try {
        if (!contract) {
            throw new Error('Please connect your wallet first');
        }
        
        console.log('Closing job:', jobId);
        
        // Show loading modal
        showLoadingModal('Closing Job', 'Please confirm the transaction in your wallet...');
        
        // Call smart contract function
        const transaction = await contract.closeJob(jobId);
        
        updateLoadingModal('Transaction Submitted', 'Waiting for blockchain confirmation...');
        
        // Wait for transaction confirmation
        const receipt = await transaction.wait();
        
        console.log('Job closed successfully!', receipt);
        
        hideLoadingModal();
        
        // Show success notification
        showNotification('Job closed successfully!', 'success');
        
        // Reload jobs
        await loadJobs();
        
        return receipt;
        
    } catch (error) {
        hideLoadingModal();
        console.error('Error closing job:', error);
        
        let errorMessage = 'Failed to close job. Please try again.';
        if (error.message.includes('user rejected')) {
            errorMessage = 'Transaction was rejected by user.';
        } else if (error.message.includes('not the employer')) {
            errorMessage = 'Only the job employer can close this job.';
        } else if (error.message.includes('insufficient funds')) {
            errorMessage = 'Insufficient funds for gas fees.';
        } else if (error.reason) {
            errorMessage = error.reason;
        }
        
        throw new Error(errorMessage);
    }
}

async function getJobApplications(jobId) {
    try {
        if (!contract) {
            throw new Error('Please connect your wallet first');
        }
        
        console.log('Fetching applications for job:', jobId);
        
        const applications = await contract.getJobApplications(jobId);
        
        return applications.map(app => ({
            jobId: app.jobId.toString(),
            applicant: app.applicant,
            resumeLink: app.resumeLink,
            timestamp: app.timestamp.toString(),
            isActive: app.isActive
        }));
        
    } catch (error) {
        console.error('Error fetching applications:', error);
        throw error;
    }
}

async function getEmployerJobs(employerAddress) {
    try {
        if (!contract) {
            throw new Error('Please connect your wallet first');
        }
        
        const jobIds = await contract.getEmployerJobs(employerAddress);
        return jobIds.map(id => id.toString());
        
    } catch (error) {
        console.error('Error fetching employer jobs:', error);
        throw error;
    }
}

async function getApplicantJobs(applicantAddress) {
    try {
        if (!contract) {
            throw new Error('Please connect your wallet first');
        }
        
        const jobIds = await contract.getApplicantJobs(applicantAddress);
        return jobIds.map(id => id.toString());
        
    } catch (error) {
        console.error('Error fetching applicant jobs:', error);
        throw error;
    }
}

async function updateStats() {
    try {
        if (!contract) return;
        
        const totalJobs = await contract.getTotalJobs();
        const totalApplications = await contract.getTotalApplications();
        
        // Update stats on landing page
        const totalJobsElement = document.getElementById('totalJobs');
        const totalApplicationsElement = document.getElementById('totalApplications');
        const activeJobsElement = document.getElementById('activeJobs');
        
        if (totalJobsElement) {
            totalJobsElement.textContent = totalJobs.toString();
        }
        
        if (totalApplicationsElement) {
            totalApplicationsElement.textContent = totalApplications.toString();
        }
        
        // Count active jobs from jobsData
        if (activeJobsElement && jobsData) {
            const activeCount = jobsData.filter(job => job.isActive).length;
            activeJobsElement.textContent = activeCount.toString();
        }
        
    } catch (error) {
        console.error('Error updating stats:', error);
    }
}

// Event Handlers
async function handleJobSubmission(event) {
    event.preventDefault();
    
    const submitButton = document.getElementById('submitJob');
    const originalText = submitButton.innerHTML;
    
    try {
        // Get form data
        const title = document.getElementById('jobTitle').value.trim();
        const description = document.getElementById('jobDescription').value.trim();
        const salary = parseInt(document.getElementById('jobSalary').value);
        
        // Validate form
        if (!title || !description || !salary) {
            throw new Error('All fields are required');
        }
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Posting...';
        
        // Post job to blockchain
        await postJob(title, description, salary);
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
        }
        
        document.getElementById('jobForm').reset();
        
        // Clear character counts
        document.querySelectorAll('.char-count').forEach(count => {
            const maxLength = count.textContent.split('/')[1];
            count.textContent = `0/${maxLength}`;
            count.style.color = '#718096';
        });
        
        // Scroll to success message
        if (successMessage) {
            successMessage.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
        
        // Reload jobs data
        await loadJobs();
        
    } catch (error) {
        alert(error.message);
        console.error('Job submission error:', error);
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    }
}

async function handleJobApplication(event) {
    event.preventDefault();
    
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    try {
        if (!window.currentJobId) {
            throw new Error('No job selected');
        }
        
        const resumeLink = document.getElementById('resumeLink').value.trim();
        
        if (!resumeLink) {
            throw new Error('Resume link is required');
        }
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        
        // Apply to job on blockchain
        await applyJob(window.currentJobId, resumeLink);
        
        // Close modal
        closeApplicationModal();
        
        // Show success notification
        showNotification('Application submitted successfully!', 'success');
        
        // Refresh jobs to update applicant count
        await loadJobs();
        
        // Re-render jobs if on jobs page
        if (typeof renderJobs === 'function') {
            renderJobs();
        }
        
    } catch (error) {
        alert(error.message);
        console.error('Job application error:', error);
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    }
}

// UI Helper Functions
function showLoadingModal(title, message) {
    const modal = document.getElementById('loadingModal');
    if (modal) {
        const titleElement = modal.querySelector('.loading-text h3');
        const messageElement = modal.querySelector('.loading-text p');
        
        if (titleElement) titleElement.textContent = title;
        if (messageElement) messageElement.textContent = message;
        
        modal.style.display = 'block';
    }
}

function updateLoadingModal(title, message) {
    const modal = document.getElementById('loadingModal');
    if (modal && modal.style.display === 'block') {
        const titleElement = modal.querySelector('.loading-text h3');
        const messageElement = modal.querySelector('.loading-text p');
        
        if (titleElement) titleElement.textContent = title;
        if (messageElement) messageElement.textContent = message;
    }
}

function hideLoadingModal() {
    const modal = document.getElementById('loadingModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function showApplicationModal(jobId, jobTitle) {
    const modal = document.getElementById('applicationModal');
    const jobTitleElement = document.getElementById('applicationJobTitle');
    
    if (modal && jobTitleElement) {
        jobTitleElement.textContent = jobTitle;
        modal.style.display = 'block';
        window.currentJobId = jobId;
        
        // Clear previous input
        const resumeLinkInput = document.getElementById('resumeLink');
        if (resumeLinkInput) {
            resumeLinkInput.value = '';
        }
    }
}

function closeApplicationModal() {
    const modal = document.getElementById('applicationModal');
    if (modal) {
        modal.style.display = 'none';
    }
    window.currentJobId = null;
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                          type === 'error' ? 'fa-exclamation-circle' : 
                          'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Search and Filter Functions
function searchJobs(query) {
    if (!jobsData) return [];
    
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return jobsData;
    
    return jobsData.filter(job => 
        job.title.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm)
    );
}

function filterJobs(criteria) {
    if (!jobsData) return [];
    
    let filtered = [...jobsData];
    
    if (criteria.isActive !== undefined) {
        filtered = filtered.filter(job => job.isActive === criteria.isActive);
    }
    
    if (criteria.minSalary) {
        filtered = filtered.filter(job => parseInt(job.salary) >= criteria.minSalary);
    }
    
    if (criteria.maxSalary) {
        filtered = filtered.filter(job => parseInt(job.salary) <= criteria.maxSalary);
    }
    
    if (criteria.employer) {
        filtered = filtered.filter(job => 
            job.employer.toLowerCase() === criteria.employer.toLowerCase()
        );
    }
    
    return filtered;
}

function sortJobs(jobs, sortBy = 'newest') {
    if (!jobs || !Array.isArray(jobs)) return [];
    
    const sorted = [...jobs];
    
    switch (sortBy) {
        case 'newest':
            return sorted.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));
        case 'oldest':
            return sorted.sort((a, b) => parseInt(a.timestamp) - parseInt(b.timestamp));
        case 'salary_high':
            return sorted.sort((a, b) => parseInt(b.salary) - parseInt(a.salary));
        case 'salary_low':
            return sorted.sort((a, b) => parseInt(a.salary) - parseInt(b.salary));
        case 'applicants_high':
            return sorted.sort((a, b) => parseInt(b.applicantCount) - parseInt(a.applicantCount));
        case 'applicants_low':
            return sorted.sort((a, b) => parseInt(a.applicantCount) - parseInt(b.applicantCount));
        default:
            return sorted;
    }
}

// Utility Functions
function formatAddress(address) {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function formatDate(timestamp) {
    const date = new Date(parseInt(timestamp) * 1000);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return date.toLocaleDateString();
}

function formatSalary(salary) {
    const num = parseInt(salary);
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
        return `${(num / 1000).toFixed(0)}K`;
    }
    return `${num}`;
}

function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}

function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Copied to clipboard!', 'success');
    });
}

// Form Validation Functions
function validateJobForm(title, description, salary) {
    const errors = [];
    
    if (!title || title.trim().length < 3) {
        errors.push('Job title must be at least 3 characters long');
    }
    
    if (!description || description.trim().length < 10) {
        errors.push('Job description must be at least 10 characters long');
    }
    
    if (!salary || isNaN(salary) || parseInt(salary) <= 0) {
        errors.push('Salary must be a positive number');
    }
    
    if (parseInt(salary) > 10000000) {
        errors.push('Salary cannot exceed $10,000,000');
    }
    
    return errors;
}

function validateApplicationForm(resumeLink) {
    const errors = [];
    
    if (!resumeLink || resumeLink.trim().length === 0) {
        errors.push('Resume link is required');
    }
    
    if (resumeLink && !validateURL(resumeLink)) {
        errors.push('Please enter a valid URL');
    }
    
    return errors;
}

// Character Counter Functions
function setupCharacterCounters() {
    const textareas = document.querySelectorAll('textarea[data-max-length]');
    const inputs = document.querySelectorAll('input[data-max-length]');
    
    [...textareas, ...inputs].forEach(element => {
        const maxLength = parseInt(element.getAttribute('data-max-length'));
        const counterId = element.id + 'Count';
        const counter = document.getElementById(counterId);
        
        if (counter) {
            element.addEventListener('input', () => {
                const currentLength = element.value.length;
                counter.textContent = `${currentLength}/${maxLength}`;
                
                if (currentLength > maxLength * 0.8) {
                    counter.style.color = 'var(--warning-color)';
                } else if (currentLength === maxLength) {
                    counter.style.color = 'var(--error-color)';
                } else {
                    counter.style.color = '#718096';
                }
            });
        }
    });
}

// Dashboard Functions (for employer/applicant dashboards)
async function loadDashboardData() {
    try {
        if (!contract || !userAccount) {
            throw new Error('Please connect your wallet first');
        }
        
        // Load user's jobs (as employer)
        const employerJobs = await getEmployerJobs(userAccount);
        
        // Load user's applications (as applicant)
        const applicantJobs = await getApplicantJobs(userAccount);
        
        // Get detailed job data
        const userJobsData = jobsData.filter(job => 
            employerJobs.includes(job.id)
        );
        
        const appliedJobsData = jobsData.filter(job => 
            applicantJobs.includes(job.id)
        );
        
        return {
            employerJobs: userJobsData,
            appliedJobs: appliedJobsData,
            totalPosted: employerJobs.length,
            totalApplied: applicantJobs.length
        };
        
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        return {
            employerJobs: [],
            appliedJobs: [],
            totalPosted: 0,
            totalApplied: 0
        };
    }
}

// Event Listeners for Enhanced Features
function setupEnhancedEventListeners() {
    // Setup character counters
    setupCharacterCounters();
    
    // Real-time form validation
    const jobForm = document.getElementById('jobForm');
    if (jobForm) {
        const titleInput = document.getElementById('jobTitle');
        const descInput = document.getElementById('jobDescription');
        const salaryInput = document.getElementById('jobSalary');
        
        [titleInput, descInput, salaryInput].forEach(input => {
            if (input) {
                input.addEventListener('blur', validateFormField);
                input.addEventListener('input', clearFieldError);
            }
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('jobSearch');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (typeof handleSearch === 'function') {
                    handleSearch(e.target.value);
                }
            }, 300);
        });
    }
    
    // Filter functionality
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', () => {
            if (typeof handleFilters === 'function') {
                handleFilters();
            }
        });
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sortJobs');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            if (typeof handleSort === 'function') {
                handleSort(e.target.value);
            }
        });
    }
}

function validateFormField(event) {
    const field = event.target;
    const fieldName = field.id;
    
    // Remove existing error
    clearFieldError(event);
    
    let isValid = true;
    let errorMessage = '';
    
    switch (fieldName) {
        case 'jobTitle':
            if (field.value.trim().length < 3) {
                errorMessage = 'Title must be at least 3 characters';
                isValid = false;
            }
            break;
        case 'jobDescription':
            if (field.value.trim().length < 10) {
                errorMessage = 'Description must be at least 10 characters';
                isValid = false;
            }
            break;
        case 'jobSalary':
            const salary = parseInt(field.value);
            if (isNaN(salary) || salary <= 0) {
                errorMessage = 'Please enter a valid salary';
                isValid = false;
            }
            break;
        case 'resumeLink':
            if (!validateURL(field.value)) {
                errorMessage = 'Please enter a valid URL';
                isValid = false;
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearFieldError(event) {
    const field = event.target;
    field.classList.remove('error');
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Pagination Functions
function paginateArray(array, page, itemsPerPage = 10) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return {
        data: array.slice(startIndex, endIndex),
        totalPages: Math.ceil(array.length / itemsPerPage),
        currentPage: page,
        totalItems: array.length,
        hasNext: endIndex < array.length,
        hasPrev: startIndex > 0
    };
}

function createPagination(container, totalPages, currentPage, onPageChange) {
    if (!container || totalPages <= 1) return;
    
    container.innerHTML = '';
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.className = 'pagination-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    });
    container.appendChild(prevBtn);
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.addEventListener('click', () => onPageChange(i));
        container.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.className = 'pagination-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    });
    container.appendChild(nextBtn);
}

// Error Handling
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    
    if (event.reason && event.reason.message) {
        if (event.reason.message.includes('MetaMask')) {
            showNotification('MetaMask error: Please check your wallet connection', 'error');
        } else if (event.reason.message.includes('network')) {
            showNotification('Network error: Please check your connection', 'error');
        } else if (event.reason.message.includes('user rejected')) {
            showNotification('Transaction cancelled by user', 'info');
        }
    }
});

window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
});

// Local Storage Helpers (for user preferences)
function saveUserPreferences(preferences) {
    try {
        localStorage.setItem('skilllink_preferences', JSON.stringify(preferences));
    } catch (error) {
        console.error('Error saving preferences:', error);
    }
}

function loadUserPreferences() {
    try {
        const saved = localStorage.getItem('skilllink_preferences');
        return saved ? JSON.parse(saved) : {};
    } catch (error) {
        console.error('Error loading preferences:', error);
        return {};
    }
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    setupEnhancedEventListeners();
});

// Add notification and field error styles
const additionalStyles = `
.field-error {
    color: var(--error-color);
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: none;
}

.form-field.error input,
.form-field.error textarea,
.form-field.error select {
    border-color: var(--error-color);
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
}

.pagination-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 0.5rem 0.75rem;
    margin: 0 0.25rem;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
    background: var(--primary-color);
    color: white;
}

.pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-btn.active {
    background: var(--primary-color);
    color: white;
}

.notification {
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--bg-primary);
    border-radius: var(--radius-md);
    padding: 1rem 1.5rem;
    box-shadow: var(--shadow-lg);
    border-left: 4px solid var(--primary-color);
    z-index: 3000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 400px;
}

.notification.show {
    transform: translateX(0);
}

.notification-success {
    border-left-color: var(--success-color);
}

.notification-error {
    border-left-color: var(--error-color);
}

.notification-warning {
    border-left-color: var(--warning-color);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.notification-success .fa-check-circle {
    color: var(--success-color);
}

.notification-error .fa-exclamation-circle {
    color: var(--error-color);
}

.notification-warning .fa-exclamation-triangle {
    color: var(--warning-color);
}

.notification span {
    color: var(--text-primary);
    font-weight: 500;
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
}

.loading-content {
    background: var(--bg-primary);
    padding: 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
    max-width: 400px;
    width: 90%;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid var(--border-color);
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.char-count {
    font-size: 0.875rem;
    color: #718096;
    margin-top: 0.25rem;
}
`;

// Inject additional styles
const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalStyles;
document.head.appendChild(additionalStyleSheet);

// Export functions for global access
window.connectWallet = connectWallet;
window.postJob = postJob;
window.loadJobs = loadJobs;
window.applyJob = applyJob;
window.closeJob = closeJob;
window.getJobApplications = getJobApplications;
window.getEmployerJobs = getEmployerJobs;
window.getApplicantJobs = getApplicantJobs;
window.updateStats = updateStats;
window.loadDashboardData = loadDashboardData;
window.formatAddress = formatAddress;
window.formatDate = formatDate;
window.formatSalary = formatSalary;
window.truncateText = truncateText;
window.searchJobs = searchJobs;
window.filterJobs = filterJobs;
window.sortJobs = sortJobs;
window.showApplicationModal = showApplicationModal;
window.closeApplicationModal = closeApplicationModal;
window.showNotification = showNotification;
window.copyToClipboard = copyToClipboard;
window.paginateArray = paginateArray;
window.createPagination = createPagination;

// Theme Toggle Functionality
// Add this to your main JavaScript file or create a new theme.js file

class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Create theme toggle button
        this.createToggleButton();
        
        // Load saved theme or detect system preference
        this.loadTheme();
        
        // Add event listeners
        this.addEventListeners();
        
        // Listen for system theme changes
        this.watchSystemTheme();
    }

    createToggleButton() {
        // Check if button already exists
        if (document.querySelector('.theme-toggle')) return;

        const toggleButton = document.createElement('button');
        toggleButton.className = 'theme-toggle';
        toggleButton.setAttribute('aria-label', 'Toggle dark mode');
        toggleButton.innerHTML = `
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
        `;
        
        document.body.appendChild(toggleButton);
    }

    loadTheme() {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('skilllink-theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        
        const theme = savedTheme || systemTheme;
        this.setTheme(theme);
    }

    setTheme(theme) {
        const html = document.documentElement;
        
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
        }
        
        // Save preference
        localStorage.setItem('skilllink-theme', theme);
        
        // Update toggle button aria-label
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) {
            toggleButton.setAttribute('aria-label', 
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
        
        // Dispatch custom event for other components that might need to respond
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme } 
        }));
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add smooth transition class
        document.body.style.transition = 'all 0.3s ease';
        
        this.setTheme(newTheme);
        
        // Remove transition after animation completes
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
        
        // Add a subtle pulse effect to the toggle button
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) {
            toggleButton.style.transform = 'translateY(-50%) scale(0.9)';
            setTimeout(() => {
                toggleButton.style.transform = 'translateY(-50%) scale(1)';
            }, 150);
        }
    }

    addEventListeners() {
        // Theme toggle button click
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-toggle')) {
                e.preventDefault();
                this.toggleTheme();
            }
        });

        // Keyboard accessibility (Alt + T to toggle theme)
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key.toLowerCase() === 't') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    watchSystemTheme() {
        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('skilllink-theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Method to get current theme
    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    // Method for components to check if dark mode is active
    isDarkMode() {
        return this.getCurrentTheme() === 'dark';
    }

    // Method to temporarily disable theme transitions (useful for page loads)
    disableTransitions() {
        const css = document.createElement('style');
        css.type = 'text/css';
        css.appendChild(document.createTextNode(`
            * {
                transition: none !important;
            }
        `));
        document.head.appendChild(css);

        // Re-enable transitions after a brief delay
        setTimeout(() => {
            document.head.removeChild(css);
        }, 100);
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});

// Additional utility functions for enhanced dark theme experience

// Smooth scroll with theme-aware colors
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add a subtle glow effect in dark mode
        if (window.themeManager && window.themeManager.isDarkMode()) {
            element.style.boxShadow = 'var(--hover-glow)';
            setTimeout(() => {
                element.style.boxShadow = '';
            }, 2000);
        }
    }
}

// Enhanced modal functionality for dark theme
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add enhanced backdrop blur in dark mode
        if (window.themeManager && window.themeManager.isDarkMode()) {
            modal.style.backdropFilter = 'blur(12px)';
        }
        
        // Focus trap for accessibility
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Enhanced notification system with dark theme support
function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const isDark = window.themeManager && window.themeManager.isDarkMode();
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1500;
        max-width: 400px;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        font-weight: 500;
        transform: translateX(400px);
        transition: var(--transition);
        ${isDark ? 'box-shadow: var(--shadow-lg), var(--glow-primary);' : 'box-shadow: var(--shadow-md);'}
    `;
    
    // Set colors based on type and theme
    const colors = {
        light: {
            info: { bg: '#f0f9ff', border: '#0ea5e9', text: '#0c4a6e' },
            success: { bg: '#f0fdf4', border: '#22c55e', text: '#14532d' },
            warning: { bg: '#fffbeb', border: '#f59e0b', text: '#92400e' },
            error: { bg: '#fef2f2', border: '#ef4444', text: '#991b1b' }
        },
        dark: {
            info: { bg: 'rgba(96, 165, 250, 0.1)', border: '#60a5fa', text: '#bfdbfe' },
            success: { bg: 'rgba(34, 197, 94, 0.1)', border: '#22c55e', text: '#bbf7d0' },
            warning: { bg: 'rgba(251, 191, 36, 0.1)', border: '#fbbf24', text: '#fef3c7' },
            error: { bg: 'rgba(248, 113, 113, 0.1)', border: '#f87171', text: '#fecaca' }
        }
    };
    
    const themeColors = colors[isDark ? 'dark' : 'light'][type];
    notification.style.backgroundColor = themeColors.bg;
    notification.style.border = `2px solid ${themeColors.border}`;
    notification.style.color = themeColors.text;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: none; 
                border: none; 
                color: ${themeColors.text}; 
                cursor: pointer; 
                margin-left: auto; 
                font-size: 1.2rem;
                opacity: 0.7;
                transition: opacity 0.2s;
            " onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Slide in animation
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after duration
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, duration);
}

// Enhanced form validation with dark theme styling
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        const isInputValid = value !== '';
        
        // Remove existing validation classes
        input.classList.remove('valid', 'invalid');
        
        if (isInputValid) {
            input.classList.add('valid');
            if (window.themeManager && window.themeManager.isDarkMode()) {
                input.style.borderColor = 'var(--success-color)';
                input.style.boxShadow = 'var(--glow-success)';
            }
        } else {
            input.classList.add('invalid');
            if (window.themeManager && window.themeManager.isDarkMode()) {
                input.style.borderColor = 'var(--error-color)';
                input.style.boxShadow = '0 0 20px rgba(248, 113, 113, 0.3)';
            }
            isValid = false;
        }
    });
    
    return isValid;
}

// Enhanced loading animation for dark theme
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loading-overlay';
    loader.innerHTML = `
        <div class="loading-content">
            <div class="ethereum-spinner">
                <i class="fab fa-ethereum"></i>
            </div>
            <h3>Processing...</h3>
            <p>Please wait while we handle your request</p>
        </div>
    `;
    
    const isDark = window.themeManager && window.themeManager.isDarkMode();
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
        backdrop-filter: blur(8px);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    const loadingContent = loader.querySelector('.loading-content');
    loadingContent.style.cssText = `
        text-align: center;
        color: var(--text-primary);
        ${isDark ? 'text-shadow: var(--glow-primary);' : ''}
    `;
    
    document.body.appendChild(loader);
    return loader;
}

function hideLoadingAnimation() {
    const loader = document.querySelector('.loading-overlay');
    if (loader) {
        loader.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            loader.remove();
        }, 300);
    }
}

// CSS for loading overlay animations
const additionalCSS = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .notification {
        animation: slideInRight 0.3s ease;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    /* Form validation styles */
    .form-group input.valid,
    .form-group textarea.valid,
    .form-group select.valid {
        border-color: var(--success-color);
    }
    
    .form-group input.invalid,
    .form-group textarea.invalid,
    .form-group select.invalid {
        border-color: var(--error-color);
    }
    
    [data-theme="dark"] .form-group input.valid,
    [data-theme="dark"] .form-group textarea.valid,
    [data-theme="dark"] .form-group select.valid {
        box-shadow: var(--glow-success);
    }
    
    [data-theme="dark"] .form-group input.invalid,
    [data-theme="dark"] .form-group textarea.invalid,
    [data-theme="dark"] .form-group select.invalid {
        box-shadow: 0 0 20px rgba(248, 113, 113, 0.3);
    }
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ThemeManager, showNotification, validateForm, showLoadingAnimation, hideLoadingAnimation };
}
