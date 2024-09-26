import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm, lognorm, triang

def get_distribution_samples(dist_type, params, size):
    """
    Generates random samples from the specified distribution.

    Parameters:
        dist_type (str): Distribution type ('normal', 'lognormal', 'triangular').
        params (dict): Parameters for the distribution.
        size (int): Number of samples to generate.

    Returns:
        np.ndarray: Random samples from the specified distribution.
    """
    if dist_type == 'normal':
        return np.random.normal(loc=params['mean'], scale=params['std'], size=size)
    elif dist_type == 'lognormal':
        # scipy's lognormal takes scale and s = stddev, mean must be in log-space
        return lognorm(s=params['std'], scale=np.exp(params['mean'])).rvs(size=size)
    elif dist_type == 'triangular':
        return np.random.triangular(left=params['left'], mode=params['mode'], right=params['right'], size=size)
    else:
        raise ValueError(f"Unsupported distribution type: {dist_type}")

def simulate_stoiip(iterations, area_dist, thickness_dist, porosity_dist, water_sat_dist, oil_fvf_dist):
    """
    Simulates STOIIP using Monte Carlo simulation.

    Parameters:
        iterations (int): Number of simulation iterations.
        area_dist (tuple): Distribution type and parameters for Area.
        thickness_dist (tuple): Distribution type and parameters for Thickness.
        porosity_dist (tuple): Distribution type and parameters for Porosity.
        water_sat_dist (tuple): Distribution type and parameters for Water Saturation.
        oil_fvf_dist (tuple): Distribution type and parameters for Oil Formation Volume Factor.

    Returns:
        np.ndarray: Simulated STOIIP values.
    """
    # Generate samples for each parameter
    area_samples = get_distribution_samples(area_dist[0], area_dist[1], iterations)
    thickness_samples = get_distribution_samples(thickness_dist[0], thickness_dist[1], iterations)
    porosity_samples = get_distribution_samples(porosity_dist[0], porosity_dist[1], iterations)
    water_sat_samples = get_distribution_samples(water_sat_dist[0], water_sat_dist[1], iterations)
    oil_fvf_samples = get_distribution_samples(oil_fvf_dist[0], oil_fvf_dist[1], iterations)
    
    # STOIIP calculation
    stoiip_values = area_samples * thickness_samples * porosity_samples * (1 - water_sat_samples) / oil_fvf_samples
    
    return stoiip_values

def plot_stoiip_distribution(stoiip_values):
    """
    Plots the distribution of STOIIP values.

    Parameters:
        stoiip_values (np.ndarray): Simulated STOIIP values.
    """
    plt.figure(figsize=(10, 6))
    plt.hist(stoiip_values, bins=30, color='skyblue', edgecolor='black', alpha=0.7)
    plt.title('Distribution of Simulated STOIIP')
    plt.xlabel('STOIIP')
    plt.ylabel('Frequency')
    plt.grid(True)
    plt.show()

# Example Usage
iterations = 10000

# Define distributions for each parameter
area_dist = ('lognormal', {'mean': 2, 'std': 0.3})         # mean in log-space, std of log
thickness_dist = ('normal', {'mean': 30, 'std': 5})         # mean = 30, std = 5
porosity_dist = ('triangular', {'left': 0.1, 'mode': 0.2, 'right': 0.3})  # triangular distribution
water_sat_dist = ('normal', {'mean': 0.3, 'std': 0.05})     # mean = 0.3, std = 0.05
oil_fvf_dist = ('normal', {'mean': 1.2, 'std': 0.1})        # mean = 1.2, std = 0.1

# Run simulation
stoiip_values = simulate_stoiip(iterations, area_dist, thickness_dist, porosity_dist, water_sat_dist, oil_fvf_dist)

# Plot results
plot_stoiip_distribution(stoiip_values)

# Print some statistics
print(f"Mean STOIIP: {np.mean(stoiip_values)}")
print(f"Standard Deviation of STOIIP: {np.std(stoiip_values)}")
print(f"90% Confidence Interval: {np.percentile(stoiip_values, [5, 95])}")
